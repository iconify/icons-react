import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c-zps23-a {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914l.067.071a3 3 0 0 0-.525.416L13.943 8H11.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.784q.098.005.198 0H14a1 1 0 0 0 1-1v-.938l1-1V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5m4.31.548l-4.83 4.83a2.2 2.2 0 0 0-.578 1.02l-.375 1.498a1 1 0 0 0-.02.104H6.5a.5.5 0 0 0 0 1h4.33a1 1 0 0 0 .112 0H11q.127 0 .232-.057l1.372-.343a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644");
}
</style><path class="c-zps23-a"/>`,
		"fallback": "fluent:document-signature-20-regular",
	});
}

export default Component;

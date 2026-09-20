import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s-ckuac7v {
  fill: currentColor;
  d: path("M19 23h-8v-4.075q-2.575-.35-4.288-2.312T5 12V1h14v11q0 2.65-1.713 4.613T13 18.925V21h6zm-5.25-10h3.15q.05-.25.075-.488T17 12v-1h-4V9h4V7h-5V5h5V3H7v8h2.75q.825 0 1.563.375T12.55 12.4q.2.275.525.438t.675.162");
}
</style><path class="s-ckuac7v"/>`,
		"fallback": "material-symbols:fluid-sharp",
	});
}

export default Component;

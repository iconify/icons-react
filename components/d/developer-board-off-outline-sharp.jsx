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
		"content": `<style>.db735by3w {
  fill: currentColor;
  d: path("M21.244 22.396L2.021 3.173l.713-.713l19.224 19.223zM7.133 4H19.23v3.77h1.538v1H19.23v2.557h1.538v1H19.23v2.558h1.538v1h-1.732l-.806-.806V5H8.133zm3.983 4.233l-.464-.464h.464zm1.825 1.575l-.518-.518V7.77h3.039v2.038zm2.52 2.842l-1.457-1.458h1.458zM7 16.23v-3.038h4.116v3.039zM4.335 4.06l.94.94H4.231v14h14v-1.044l.98.98V20H3.232V4.06zm8.088 8.088l3.039 3.039v1.044h-3.039zM8.044 7.769l3.071 3.071v.968H7V7.769z");
}
</style><path class="db735by3w"/>`,
		"fallback": "material-symbols-light:developer-board-off-outline-sharp",
	});
}

export default Component;

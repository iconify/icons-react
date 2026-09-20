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
		"content": `<style>.o_k518bmt {
  fill: currentColor;
  d: path("M6 18v-3h13V6h3v16l-4-4zm-4-1V2h15v11H6zm2-4.825L5.175 11H15V4H4zM4 11V4z");
}
</style><path class="o_k518bmt"/>`,
		"fallback": "material-symbols:forum-outline-sharp",
	});
}

export default Component;

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
		"content": `<style>.uvjbj_bxp {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h7.213q.323 0 .628.13t.522.349L18.52 7.02q.217.218.348.522t.131.628v11.214q0 .69-.463 1.153T17.385 21zM14 7.192q0 .349.23.578t.578.23H18l-4-4z");
}
</style><path class="uvjbj_bxp"/>`,
		"fallback": "material-symbols-light:draft-rounded",
	});
}

export default Component;

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
		"content": `<style>.g5l92z_cb {
  fill: currentColor;
  d: path("M8.808 14.539V9.46L6.269 12zM17.73 12l-2.539-2.539v5.078zM3 19V5h18v14z");
}
</style><path class="g5l92z_cb"/>`,
		"fallback": "material-symbols-light:fit-page-width-sharp",
	});
}

export default Component;

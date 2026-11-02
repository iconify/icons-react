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
		"content": `<style>.fgvuc9pkq {
  fill: currentColor;
  d: path("m6.382 4.968l-.711-.712a10.001 10.001 0 0 1 14.073 14.073Zm-2.126.703l14.073 14.073A10.001 10.001 0 0 1 4.256 5.671");
}
</style><path class="fgvuc9pkq"/>`,
		"fallback": "coolicons:circle-slash-fill-round",
	});
}

export default Component;

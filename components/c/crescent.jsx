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
		"content": `<style>.fpoc1hqwf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.24 2.289q.082.028.156.074q.073.045.134.107q.062.061.107.134q.046.074.074.156q.023.07.033.143q.009.073.004.147t-.024.145t-.052.138t-.078.124q-.045.059-.1.108q-.056.048-.12.085t-.134.061Q9.291 5.721 9.291 12t5.949 8.289q.082.028.156.074q.073.045.134.107q.062.061.107.134q.046.074.074.156q.047.141.037.29t-.076.283t-.178.232t-.254.146q-4.984 1.684-9.257-1.383Q1.709 17.261 1.709 12t4.274-8.328t9.257-1.383");
}
</style><path class="fpoc1hqwf"/>`,
		"fallback": "uix-solid:crescent",
	});
}

export default Component;

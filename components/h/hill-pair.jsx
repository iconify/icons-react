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
		"content": `<style>.yklgkccem {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.228 18.699q.131.051.272.051h19.004q.038 0 .076-.004q.068-.008.134-.027q.066-.02.128-.051q.061-.032.115-.074t.101-.093t.082-.11q.036-.058.06-.123q.025-.064.037-.132q.013-.067.013-.136v-.004q0-.038-.004-.076v-.001q-1.071-9.993-4.56-11.22q-2.95-1.038-4.92 3.175Q11.161 8.25 9.5 8.25q-4.013 0-7.699 9.478q-.051.131-.051.272v.005q.001.112.035.22q.033.107.097.2t.153.163t.193.111M20.66 17.25h-3.65q-1.554-3.887-3.167-6.095q1.501-3.69 3.346-3.041q2.474.87 3.471 9.136m-8.35-5.705q.077.179.231.298q1.394 1.869 2.851 5.407H3.608q3.09-7.5 5.892-7.5q1.371 0 2.81 1.795");
}
</style><path class="yklgkccem"/>`,
		"fallback": "uix-solid:hill-pair",
	});
}

export default Component;

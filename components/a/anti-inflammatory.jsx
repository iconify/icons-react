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
		"content": `<style>.yyesrtbmx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.488 1.931q6.323 5.419 7.141 10.93q-.227-.026-.464-.026q-1.554 0-2.652 1.099l-2.829 2.829q-1.099 1.098-1.099 2.652q0 1.553 1.099 2.651l.011.012q-.813.172-1.695.172q-3.162 0-5.43-2.213q-2.32-2.264-2.32-5.537q0-3.811 3.22-7.03q.105-.106.243-.163T8 7.25t.287.057t.243.163q.089.088.144.2t.07.237q.192 1.538.942 2.384q-.07-4.701 1.643-8.126q.067-.134.18-.232q.112-.097.254-.145q.141-.047.29-.036q.149.01.282.077q.083.041.153.102m9.177 14.654q0-1.035-.733-1.767q-.732-.733-1.767-.733q-1.036 0-1.768.733l-2.829 2.829q-.733.732-.733 1.768q0 1.035.733 1.767q.732.733 1.767.733q1.036 0 1.768-.733l2.829-2.829q.733-.732.733-1.768m-2.5-1q.414 0 .707.293t.293.707t-.293.708l-.884.884l-1.415-1.415l.884-.884q.293-.293.708-.293m-2.653 2.238l1.415 1.415l-.884.884q-.293.293-.708.293q-.414 0-.707-.293t-.293-.707t.293-.708z");
}
</style><path class="yyesrtbmx"/>`,
		"fallback": "uix-solid:anti-inflammatory",
	});
}

export default Component;

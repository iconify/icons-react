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
		"content": `<style>.nqrwk52vn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 5.5q0-2.75 7.25-2.75t7.25 2.75v13q0 2.75-7.25 2.75T4.75 18.5zm1.5 1.933V18.5q0 1.25 5.75 1.25t5.75-1.25V7.433q-1.798.817-5.75.817t-5.75-.817m2.579 6.402q-.985-1.971.529-3.41q1.437-1.365 3.405-.627q.295.117.955.081q1.385-.076 1.906.705q.026.039.047.081q.789 1.579-.577 3.355q-1.33 1.73-3.344 1.73q-1.964 0-2.921-1.915");
}
</style><path class="nqrwk52vn"/>`,
		"fallback": "uix-solid:beans-can",
	});
}

export default Component;

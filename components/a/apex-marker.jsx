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
		"content": `<style>.biiy8ybph {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.829 10.164l2.5-4.999q.047-.094.117-.171t.16-.132t.189-.083q.101-.029.205-.029h4q.104 0 .205.029q.1.028.189.083t.16.132t.117.171l2.5 5l2.293 4.585H20q2.25 0 2.25 2.25T20 19.25H4q-2.25 0-2.25-2.25T4 14.75h.536zm1.135 1.086l-1.75 3.5h11.572l-1.75-3.5zm7.322-1.5l-1.75-3.5h-3.072l-1.75 3.5z");
}
</style><path class="biiy8ybph"/>`,
		"fallback": "uix-solid:apex-marker",
	});
}

export default Component;

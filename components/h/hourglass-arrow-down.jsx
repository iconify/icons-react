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
		"content": `<style>.vih6amb7m {
  fill: currentColor;
  d: path("M3.5 19v-1H5v-2.654q0-1.184.7-2.123T7.508 12q-1.127-.285-1.817-1.233Q5 9.82 5 8.616V6H3.5V5h10.385v1h-1.462v2.616q0 1.223-.71 2.161q-.71.939-1.836 1.223q1.127.285 1.837 1.214q.709.928.709 2.132V18h1.462v1zm15.885 0l-2.693-2.692l.714-.708l1.479 1.479V5h1v12.085l1.484-1.485l.708.708z");
}
</style><path class="vih6amb7m"/>`,
		"fallback": "material-symbols-light:hourglass-arrow-down",
	});
}

export default Component;

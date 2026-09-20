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
		"content": `<style>.l-p4e9bzq {
  fill: currentColor;
  d: path("M7.808 20h8.384v-3q0-1.766-1.213-3.017Q13.766 12.73 12 12.73t-2.979 1.254T7.808 17zM5.5 21q-.213 0-.356-.144T5 20.499t.144-.356T5.5 20h1.308v-3q0-1.852 1.135-3.285T10.853 12q-1.774-.3-2.91-1.724T6.808 7V4H5.5q-.213 0-.356-.144T5 3.499t.144-.356T5.5 3h13q.213 0 .356.144t.144.357t-.144.356T18.5 4h-1.308v3q0 1.852-1.135 3.276T13.147 12q1.774.28 2.91 1.715q1.135 1.433 1.135 3.285v3H18.5q.213 0 .356.144t.144.357t-.144.356T18.5 21z");
}
</style><path class="l-p4e9bzq"/>`,
		"fallback": "material-symbols-light:hourglass-top-outline-rounded",
	});
}

export default Component;

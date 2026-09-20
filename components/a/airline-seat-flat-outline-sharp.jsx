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
		"content": `<style>.ypn2f41bl {
  fill: currentColor;
  d: path("M9.539 13V8h10.923v5zm1-4v3zm-7 6.77v-1h16.923v1zm.605-3.376q-.605-.606-.605-1.51q0-.903.605-1.509t1.51-.606t1.51.606t.605 1.51t-.605 1.51t-1.51.605t-1.51-.606m2.309-.71q.316-.317.316-.8q0-.482-.316-.799q-.316-.316-.8-.316q-.482 0-.798.316q-.317.317-.317.8q0 .482.317.799q.316.316.799.316t.799-.316m4.086.316h8.923V9h-8.923zm-4.885-1.115");
}
</style><path class="ypn2f41bl"/>`,
		"fallback": "material-symbols-light:airline-seat-flat-outline-sharp",
	});
}

export default Component;

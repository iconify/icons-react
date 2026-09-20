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
		"content": `<style>.cyzrfsbzj {
  fill: currentColor;
  d: path("M5 19.462V15q0-.69.463-1.153t1.153-.462h10.769q.69 0 1.153.462T19 15v4.462zm1-3h12V15q0-.23-.192-.423t-.424-.192H6.616q-.231 0-.424.192T6 15zm6-3.077L8 7.962v-.193q0-1.671 1.165-2.835Q10.329 3.769 12 3.769t2.836 1.165T16 7.769v.192z");
}
</style><path class="cyzrfsbzj"/>`,
		"fallback": "material-symbols-light:approval",
	});
}

export default Component;

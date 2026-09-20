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
		"content": `<style>.wjoeebzfc {
  fill: currentColor;
  d: path("M5 10.385v8q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423v-8zm7 7.115q-.633 0-1.066-.443q-.434-.444-.434-1.095q0-.598.356-1.332T12 12.923q.789.993 1.144 1.717t.356 1.322q0 .652-.434 1.095q-.433.443-1.066.443m5.549-9.951q.22-.22.22-.549t-.22-.549t-.549-.22t-.549.22t-.22.549t.22.549t.549.22t.549-.22M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="wjoeebzfc"/>`,
		"fallback": "material-symbols-light:dishwasher",
	});
}

export default Component;

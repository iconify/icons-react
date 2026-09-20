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
		"content": `<style>.da_ca-bwp {
  fill: currentColor;
  d: path("M7 9h3.15q-.075-.225-.112-.475T10 8t.038-.525T10.15 7H7zm11.725.625Q20 9.25 20 8t-1.275-1.625T16 6t-2.725.375T12 8t1.275 1.625T16 10t2.725-.375M2 20V9h3V5h6.875q.85-.5 1.925-.75T16 4q2.275 0 4.138.988T22 8v12h-6v-5h-2v5h-2v-5h-2v5H8v-5H6v5z");
}
</style><path class="da_ca-bwp"/>`,
		"fallback": "material-symbols:bia-sharp",
	});
}

export default Component;

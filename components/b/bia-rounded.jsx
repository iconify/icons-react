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
		"content": `<style>.quwyaqhik {
  fill: currentColor;
  d: path("M7 9h3.15q-.075-.225-.112-.475T10 8t.038-.525T10.15 7H7zm11.725.625Q20 9.25 20 8t-1.275-1.625T16 6t-2.725.375T12 8t1.275 1.625T16 10t2.725-.375M4 20q-.825 0-1.412-.587T2 18v-7q0-.825.588-1.412T4 9h1V7q0-.825.588-1.412T7 5h4.875q.85-.5 1.925-.75T16 4q2.275 0 4.138.988T22 8v10q0 .825-.587 1.413T20 20h-4v-4q0-.425-.288-.712T15 15t-.712.288T14 16v4h-2v-4q0-.425-.288-.712T11 15t-.712.288T10 16v4H8v-4q0-.425-.288-.712T7 15t-.712.288T6 16v4z");
}
</style><path class="quwyaqhik"/>`,
		"fallback": "material-symbols:bia-rounded",
	});
}

export default Component;

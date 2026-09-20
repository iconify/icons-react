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
		"content": `<style>.pgj-hyjez {
  fill: currentColor;
  d: path("m3 19l5.5-7L3 4.98h12.462L21 12l-.183.214q-.29-.162-.587-.277q-.297-.114-.647-.175L15 5.98H5L9.75 12L5 18h6.442q0 .256.018.506t.07.494zm14.371.827l2.84-2.796l-.626-.627l-2.214 2.182l-.955-.975l-.627.633zM18 22.288q-1.748 0-2.96-1.212t-1.213-2.96t1.213-2.961T18 13.942t2.96 1.213t1.213 2.96t-1.213 2.961T18 22.288");
}
</style><path class="pgj-hyjez"/>`,
		"fallback": "material-symbols-light:all-match-outline-sharp",
	});
}

export default Component;

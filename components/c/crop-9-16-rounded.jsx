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
		"content": `<style>.zijk06bpf {
  fill: currentColor;
  d: path("M9.616 20q-.691 0-1.153-.462T8 18.384V5.616q0-.691.463-1.153T9.616 4h4.769q.69 0 1.153.463T16 5.616v12.769q0 .69-.462 1.153T14.385 20z");
}
</style><path class="zijk06bpf"/>`,
		"fallback": "material-symbols-light:crop-9-16-rounded",
	});
}

export default Component;

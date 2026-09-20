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
		"content": `<style>.ck-e6kbde {
  fill: currentColor;
  d: path("M8.692 13.116h6.616v-.166q0-.792-.937-1.313T12 11.116t-2.371.52q-.937.522-.937 1.314zm4.374-4.05Q13.5 8.633 13.5 8t-.434-1.066Q12.633 6.5 12 6.5t-1.066.434T10.5 8t.434 1.066Q11.367 9.5 12 9.5t1.066-.434M3 20.077V3h18v14H6.077z");
}
</style><path class="ck-e6kbde"/>`,
		"fallback": "material-symbols-light:3p-sharp",
	});
}

export default Component;

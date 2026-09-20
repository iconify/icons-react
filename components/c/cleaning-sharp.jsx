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
		"content": `<style>.o9wur5bvv {
  fill: currentColor;
  d: path("M9.866 8.116L10.98 6v-.77H9.596V4h5.616v1.462l-.885 1.769h-1.923V6.192l-1.846 1.924zM8.789 21v-6.194L12.404 8h2.385v13z");
}
</style><path class="o9wur5bvv"/>`,
		"fallback": "material-symbols-light:cleaning-sharp",
	});
}

export default Component;

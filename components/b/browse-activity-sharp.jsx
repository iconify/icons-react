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
		"content": `<style>.atmuzqb6c {
  fill: currentColor;
  d: path("M1 21v-2h22v2zm1-3v-7h5.375l2 4h1.2l3.375-5.875l.925 1.875H22v7zm8.075-6.125L8.6 9H2V3h20v6h-5.875l-1.5-3h-1.2z");
}
</style><path class="atmuzqb6c"/>`,
		"fallback": "material-symbols:browse-activity-sharp",
	});
}

export default Component;

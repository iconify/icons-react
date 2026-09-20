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
		"content": `<style>.clj-g92sf {
  fill: currentColor;
  d: path("M9.338 21.413Q8.25 20.325 8.25 18.75q0-1.3.775-2.287T11 15.124V13H5V9H2.5V2h7v7H7v2h10V8.875q-1.2-.35-1.975-1.338T14.25 5.25q0-1.575 1.088-2.662T18 1.5t2.663 1.088T21.75 5.25q0 1.3-.775 2.288T19 8.875V13h-6v2.125q1.2.35 1.975 1.338t.775 2.287q0 1.575-1.088 2.663T12 22.5t-2.662-1.088");
}
</style><path class="clj-g92sf"/>`,
		"fallback": "material-symbols:family-history",
	});
}

export default Component;

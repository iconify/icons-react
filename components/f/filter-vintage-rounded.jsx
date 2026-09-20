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
		"content": `<style>.vsggyibuw {
  fill: currentColor;
  d: path("M9.525 21.1q-1.1-.9-1.375-2.3q-1.325.425-2.675-.05T3.4 17.1q-.75-1.2-.55-2.662T4.15 12q-1.05-.95-1.263-2.35t.463-2.6t2.038-1.737T8.1 5.2q.275-1.4 1.375-2.3T12 2t2.525.9T15.9 5.2q1.4-.425 2.713.075T20.65 7.05q.675 1.25.488 2.613T19.85 12q1.1.975 1.313 2.413T20.7 17.1q-.725 1.275-2.037 1.7t-2.713 0q-.275 1.4-1.375 2.3t-2.525.9t-2.525-.9M12 16q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16");
}
</style><path class="vsggyibuw"/>`,
		"fallback": "material-symbols:filter-vintage-rounded",
	});
}

export default Component;

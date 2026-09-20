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
		"content": `<style>.nqoyckbah {
  fill: currentColor;
  d: path("M12.53 16.23q1.757 0 2.994-1.24q1.238-1.242 1.238-2.99t-1.238-2.99q-1.237-1.24-2.993-1.24q-.458 0-.894.102q-.437.103-.86.29q1.137.527 1.8 1.56q.664 1.034.664 2.278t-.664 2.278t-1.8 1.56q.423.187.86.29q.436.103.894.103M12 21.916L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.916 12L19 14.931V19h-4.069z");
}
</style><path class="nqoyckbah"/>`,
		"fallback": "material-symbols-light:brightness-4-sharp",
	});
}

export default Component;

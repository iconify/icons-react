import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b_veqlb6f {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.91 96h-32.06A60.07 60.07 0 0 0 132 68.15V36.09A92.13 92.13 0 0 1 219.91 124M124 124H76.17A52.05 52.05 0 0 1 124 76.17Zm0 8v47.83A52.05 52.05 0 0 1 76.17 132Zm8 0h47.83A52.05 52.05 0 0 1 132 179.83Zm0-8V76.17A52.05 52.05 0 0 1 179.83 124Zm-8-87.91v32.06A60.07 60.07 0 0 0 68.15 124H36.09A92.13 92.13 0 0 1 124 36.09M36.09 132h32.06A60.07 60.07 0 0 0 124 187.85v32.06A92.13 92.13 0 0 1 36.09 132M132 219.91v-32.06A60.07 60.07 0 0 0 187.85 132h32.06A92.13 92.13 0 0 1 132 219.91");
}
</style><path class="b_veqlb6f"/>`,
		"fallback": "ph:chart-polar-thin",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rga-pig7o {
  fill: currentColor;
  d: path("M5 4.75A.75.75 0 0 1 5.75 4h3c1.182 0 2.133.412 2.788 1.087A3.46 3.46 0 0 1 12.5 7.5a3.46 3.46 0 0 1-.962 2.413C10.883 10.588 9.932 11 8.75 11H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h3.19c.818 0 1.367-.276 1.712-.631A1.96 1.96 0 0 0 11 7.5a1.96 1.96 0 0 0-.538-1.369c-.345-.355-.894-.631-1.712-.631h-3A.75.75 0 0 1 5 4.75");
}
</style><path class="rga-pig7o"/>`,
		"fallback": "fluent:arrow-hook-down-left-16-filled",
	});
}

export default Component;

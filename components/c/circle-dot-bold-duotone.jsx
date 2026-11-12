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
		"content": `<style>.er9_2_bjd {
  fill: currentColor;
  d: path("M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25Z");
}

.hrxlgg64z {
  cx: 12px;
  cy: 12px;
  r: 10px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><circle class="hrxlgg64z"/><path class="er9_2_bjd"/>`,
		"fallback": "solar:circle-dot-bold-duotone",
	});
}

export default Component;

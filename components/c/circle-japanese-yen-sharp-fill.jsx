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
		"content": `<style>.z9-vwpbpb {
  fill: currentColor;
  d: path("M12 1C17.9372 1 23 6.0628 23 12C23 17.9372 17.9372 23 12 23C6.0628 23 1 17.9372 1 12C1 6.0628 6.0628 1 12 1ZM9.0052 5.0587L7.5 6.3757L11 10.3757L11 12L7.5 12L7.5 14L11 14L11 15L7.5 15L7.5 17L11 17L11 19L13 19L13 17L16.5 17L16.5 15L13 15L13 14L16.5 14L16.5 12L13 12L13 10.3757L16.5 6.3757L14.9948 5.0587L12 8.4814L9.0052 5.0587Z");
}
</style><path class="z9-vwpbpb"/>`,
		"fallback": "keyline-icons:circle-japanese-yen-sharp-fill",
	});
}

export default Component;

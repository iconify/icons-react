import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vkeyb_2jv {
  fill: currentColor;
  d: path("M14 3a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 20h4.516a7.5 7.5 0 0 1 13.878-4.422Q26 15.055 26 14.5a5.5 5.5 0 0 0-5.069-5.483A7 7 0 0 0 14 3m12 16.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-7 4a.5.5 0 0 0 1 0v-6.793l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.351-.146h-.006a.5.5 0 0 0-.35.146l-3 3a.5.5 0 0 0 .707.708L19 16.707z");
}
</style><path class="vkeyb_2jv"/>`,
		"fallback": "fluent:cloud-arrow-up-28-filled",
	});
}

export default Component;

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
		"content": `<style>.uowv4h4zo {
  fill: currentColor;
  d: path("M14 3a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 20h4.516a7.5 7.5 0 0 1 13.878-4.422Q26 15.055 26 14.5a5.5 5.5 0 0 0-5.069-5.483A7 7 0 0 0 14 3m12 16.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708l2.647 2.646l-2.647 2.646a.5.5 0 0 0 .708.708l2.646-2.647l2.646 2.647a.5.5 0 0 0 .708-.708L20.207 19.5l2.647-2.646a.5.5 0 0 0-.708-.708L19.5 18.793z");
}
</style><path class="uowv4h4zo"/>`,
		"fallback": "fluent:cloud-dismiss-28-filled",
	});
}

export default Component;

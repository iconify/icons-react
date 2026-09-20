import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n47-ijb6k {
  fill: var(--svg-color--378bba, #378bba);
  d: path("M2 16L15.288 2.712v6.644L8.644 16l6.644 6.644v6.644Z");
}

.uhm1t8jky {
  fill: var(--svg-color--378bba, #378bba);
  d: path("m10.542 16l4.746-4.746v9.492Z");
}

.wi4ulmt6q {
  fill: var(--svg-color--30b9db, #30b9db);
  d: path("M30 16L16.237 2.712v6.644L22.881 16l-6.644 6.644v6.644Z");
}
</style><path class="n47-ijb6k"/><path class="uhm1t8jky"/><path class="wi4ulmt6q"/>`,
		"fallback": "vscode-icons:file-type-fsharp",
	});
}

export default Component;

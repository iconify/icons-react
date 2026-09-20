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
		"content": `<style>.kdsrawqmf {
  fill: var(--svg-color--7baddb, #7baddb);
  d: path("M25.9 14H.3l3.8 13h25.6z");
}

.l8y9m7bko {
  fill: var(--svg-color--0078d6, #0078d6);
  d: path("m10 12.974l8.582-1.166v8.253L10 20.109Zm8.577 8.037l.008 8.261l-8.579-1.172v-7.14Zm1.041-9.355L31 10v9.956l-11.379.089ZM31 21.089V31l-11.382-1.6l-.018-8.33Z");
}

.rebhiib2f {
  fill: var(--svg-color--7baddb, #7baddb);
  d: path("M27.9 6h-9.7l-2 4H5v17h25V6Zm.1 18H7V12h21Zm.1-14h-7.8l1-2H28Z");
}
</style><path class="rebhiib2f"/><path class="kdsrawqmf"/><path class="l8y9m7bko"/>`,
		"fallback": "vscode-icons:folder-type-windows-opened",
	});
}

export default Component;

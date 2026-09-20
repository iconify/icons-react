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
		"content": `<style>.tp4727w5i {
  fill: currentColor;
  d: path("m18.356 21.06l-7.102-7.114q-.558.258-1.138.406t-1.231.148q-2.289 0-3.894-1.606Q3.385 11.288 3.385 9q0-.65.144-1.251t.421-1.153l3.535 3.496L9.977 7.6L6.519 4.104q.552-.277 1.134-.44q.582-.164 1.232-.164q2.288 0 3.894 1.606T14.385 9q0 .69-.139 1.27q-.138.58-.415 1.1l7.113 7.101zm0-1.427l1.155-1.156l-6.919-6.92q.393-.538.593-1.2t.2-1.357q0-1.827-1.415-3.276q-1.414-1.449-3.628-1.174l3.05 3.05l-3.907 3.908l-3.05-3.05q-.218 2.425 1.25 3.733q1.469 1.309 3.2 1.309q.669 0 1.329-.19t1.223-.597zM11.8 11.877");
}
</style><path class="tp4727w5i"/>`,
		"fallback": "material-symbols-light:build-outline-sharp",
	});
}

export default Component;

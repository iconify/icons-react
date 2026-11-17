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
		"content": `<style>.oh9n2-bam {
  fill: currentColor;
  d: path("M11.15 4.474A1 1 0 0 0 11 5v1.586L8.293 9.293a3.121 3.121 0 1 0 4.414 4.414l1-1a1.83 1.83 0 0 1 2.586 0l2.827 2.827q-.739.846-1.564 1.608l-2.349-2.349a.999.999 0 1 0-1.414 1.414l2.241 2.241q-.608.483-1.238.933l-3.089-3.088a.999.999 0 1 0-1.414 1.414l2.806 2.806q-.303.187-.613.361a1 1 0 0 1-.972 0a22 22 0 0 1-1.475-.917a29 29 0 0 1-3.203-2.46c-1.233-1.096-2.376-2.315-3.271-3.706C2.645 12.359 2.001 10.72 2 9c0-.779.105-1.561.359-2.299c.666-1.928 2.249-3.191 4.267-3.443c1.589-.199 3.244.257 4.524 1.216m9.194 9.456l-2.637-2.637a3.83 3.83 0 0 0-5.414 0l-1 1a1.121 1.121 0 1 1-1.586-1.586l3-3A1 1 0 0 0 13 7V5a1 1 0 0 0-.15-.526c1.28-.959 2.935-1.415 4.524-1.216c2.018.252 3.601 1.515 4.267 3.443c.254.738.359 1.52.359 2.299c-.001 1.777-.688 3.465-1.656 4.93");
}
</style><path class="oh9n2-bam"/>`,
		"fallback": "coolicons:heart-handshake-fill",
	});
}

export default Component;

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
		"content": `<style>.lco8f9_hn {
  fill: currentColor;
  d: path("M8.807 18q-1.163 0-1.985-.817T6 15.209q0-.538.213-1.056q.214-.518.62-.916l6.404-6.423q.399-.397.918-.606q.52-.208 1.06-.208q1.158 0 1.972.817T18 8.791q0 .538-.208 1.056q-.209.518-.606.917l-6.403 6.423q-.423.404-.93.608T8.808 18");
}
</style><path class="lco8f9_hn"/>`,
		"fallback": "material-symbols-light:eraser-size-3-outline-rounded",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xif1tcbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGRu6oNd6B" class="xif1tcbsa"/></defs><use href="#SVGRu6oNd6B"/><use href="#SVGRu6oNd6B"/>`,
		"fallback": "lineicons:instagram",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adexpl72i.css';
import '../../css/n/nqk0mrsuo.css';
import '../../css/n/n16lh5xxw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8kN8GcKp"><g class="adexpl72i"><path class="nqk0mrsuo"/><path class="n16lh5xxw"/></g></mask></defs><path mask="url(#SVG8kN8GcKp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:helmet-one",
	});
}

export default Component;

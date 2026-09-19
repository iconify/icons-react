import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/z/z9rezk5xx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6FlpOeTm"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="z9rezk5xx"/></g></mask></defs><path mask="url(#SVG6FlpOeTm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:eight-key",
	});
}

export default Component;

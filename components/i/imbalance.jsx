import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/d08qanr9p.css';
import '../../css/g/gl1hokdww.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaFxh4cRS"><g class="aql7dnt-u"><path class="d08qanr9p"/><path clip-rule="evenodd" class="gl1hokdww"/></g></mask></defs><path mask="url(#SVGaFxh4cRS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:imbalance",
	});
}

export default Component;

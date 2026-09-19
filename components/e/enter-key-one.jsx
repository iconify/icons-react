import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o5iwjqk2c.css';
import '../../css/i/ica7owv_k.css';
import '../../css/c/cjt33cblq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXqXvIril"><g class="aql7dnt-u"><path class="o5iwjqk2c"/><path class="ica7owv_k"/><path class="cjt33cblq"/></g></mask></defs><path mask="url(#SVGXqXvIril)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:enter-key-one",
	});
}

export default Component;

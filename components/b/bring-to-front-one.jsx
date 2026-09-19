import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zr3aj01_m.css';
import '../../css/y/yae33rojb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwFfETvuW"><g class="aql7dnt-u"><path class="zr3aj01_m"/><path class="yae33rojb"/></g></mask></defs><path mask="url(#SVGwFfETvuW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bring-to-front-one",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zm1am8zwq.css';
import '../../css/g/ghilmzbaa.css';
import '../../css/a/a_66_cbsw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJQBRUoTK"><g class="hv130ab-t"><path class="zm1am8zwq"/><path class="ghilmzbaa"/><path class="a_66_cbsw"/></g></mask></defs><path mask="url(#SVGJQBRUoTK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-left-one",
	});
}

export default Component;

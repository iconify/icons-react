import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bvsicac_i.css';
import '../../css/k/kfk_307bu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTf2ywlsa"><g class="ylrso7y3c"><path class="bvsicac_i"/><path class="kfk_307bu"/></g></mask></defs><path mask="url(#SVGTf2ywlsa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bib",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/y36p79bsk.css';
import '../../css/s/sj4ws-i4j.css';
import '../../css/a/a4m4flg4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGghnIveXz"><g class="v3_i3wktz"><rect class="y36p79bsk"/><path class="sj4ws-i4j"/><path class="a4m4flg4d"/></g></mask></defs><path mask="url(#SVGghnIveXz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:announcement",
	});
}

export default Component;

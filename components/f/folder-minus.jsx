import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h85pweb1l.css';
import '../../css/z/zqpa_ob9q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIIaB77rg"><g class="v3_i3wktz"><path class="h85pweb1l"/><path class="zqpa_ob9q"/></g></mask></defs><path mask="url(#SVGIIaB77rg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-minus",
	});
}

export default Component;

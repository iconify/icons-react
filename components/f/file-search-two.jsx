import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fvtb_21_v.css';
import '../../css/w/wht39nbrx.css';
import '../../css/m/my85mgn3v.css';
import '../../css/w/wxrtcfo2g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJQWvOeAA"><g class="rohhhzb0l"><path class="fvtb_21_v"/><path class="wht39nbrx"/><circle class="my85mgn3v"/><path class="wxrtcfo2g"/></g></mask></defs><path mask="url(#SVGJQWvOeAA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-search-two",
	});
}

export default Component;

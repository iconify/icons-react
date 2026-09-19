import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a77kgnbjq.css';
import '../../css/v/v-dirxeca.css';
import '../../css/g/g712ifbmx.css';
import '../../css/s/s5_syfllw.css';
import '../../css/h/hkb1gblhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHRhf0LCr"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="a77kgnbjq"/><path class="v-dirxeca"/><path class="g712ifbmx"/><path clip-rule="evenodd" class="s5_syfllw"/><path class="hkb1gblhq"/></g></mask></defs><path mask="url(#SVGHRhf0LCr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby",
	});
}

export default Component;

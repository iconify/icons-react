import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucl-hvb3s.css';
import '../../css/w/w72o1pqwr.css';
import '../../css/v/vof4ksbrp.css';
import '../../css/l/lkn26ea6s.css';
import '../../css/a/a5nqrgbph.css';
import '../../css/k/kzbv26bmw.css';
import '../../css/y/ysh-urbfd.css';
import '../../css/d/dey2awzrg.css';
import '../../css/k/kyfcgw-rl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNrze7bha"><g class="ft5dv1b6b"><circle class="ucl-hvb3s"/><path clip-rule="evenodd" class="w72o1pqwr"/><path class="vof4ksbrp"/><path clip-rule="evenodd" class="lkn26ea6s"/><path class="a5nqrgbph"/><path clip-rule="evenodd" class="kzbv26bmw"/><path class="ysh-urbfd"/><path clip-rule="evenodd" class="dey2awzrg"/><path class="kyfcgw-rl"/></g></mask></defs><path mask="url(#SVGNrze7bha)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:aiming",
	});
}

export default Component;

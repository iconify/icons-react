import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z776msg2f.css';
import '../../css/l/l9hzahg6k.css';
import '../../css/z/z4h5k8b8j.css';
import '../../css/y/yhpinr7sk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh3RzhbSK"><g class="ft5dv1b6b"><ellipse class="z776msg2f"/><circle class="l9hzahg6k"/><path class="z4h5k8b8j"/><path class="yhpinr7sk"/></g></mask></defs><path mask="url(#SVGh3RzhbSK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:golf-course",
	});
}

export default Component;

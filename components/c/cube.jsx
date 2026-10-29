import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdoxnfzzb.css';
import '../../css/u/uk-pbhbpe.css';
import '../../css/e/e5pbpbb2g.css';
import '../../css/g/gcix4ebdb.css';
import '../../css/a/ajr7hrbwn.css';
import '../../css/u/uzphl8bmi.css';
import '../../css/a/a45ohybdp.css';
import '../../css/z/zc15z9bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow zdoxnfzzb"/><path class="uk-pbhbpe wm-k"/><path class="e5pbpbb2g wm-k"/><path class="gcix4ebdb wm-k"/><path class="ajr7hrbwn wm-k"/><path class="uzphl8bmi wm-k"/><path class="a45ohybdp wm-shine"/><path class="wm-a zc15z9bvu"/>`,
		"fallback": "withicons-pastel:cube",
	});
}

export default Component;
